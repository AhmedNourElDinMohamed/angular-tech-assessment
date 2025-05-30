import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { SortableColumn, SortIcon, Table, TableModule } from 'primeng/table';
import { UsersService } from '../services/users.service';
import { ButtonModule } from 'primeng/button';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateUserComponent } from '../create-user/create-user.component';
import { finalize } from 'rxjs/operators';
interface Column {
  field: string;
  header: string;
  customExportHeader?: string;
}

interface ExportColumn {
  title: string;
  dataKey: string;
}

@Component({
  selector: 'app-users',
  imports: [
    TableModule,
    ButtonModule,
    IconFieldModule,
    InputTextModule,
    InputIconModule,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  private usersService = inject(UsersService);
  private destroyRef = inject(DestroyRef);
  private modalService = inject(NgbModal);
  protected isLoading = signal(false);
  cols!: Column[];
  exportColumns!: ExportColumn[];

  users = this.usersService.users;

  ngOnInit() {
    this.getUsers();

    this.cols = [
      { field: 'username', header: 'Username' },
      { field: 'email', header: 'Email' },
      { field: 'password', header: 'Password' },
      { field: 'id', header: 'Id' },
    ];

    this.exportColumns = this.cols.map((col) => ({
      title: col.header,
      dataKey: col.field,
    }));
  }

  /**
   * Fetches users from the service and updates the loading state
   */
  getUsers(): void {
    this.isLoading.set(true);
    this.usersService
      .getUsers()
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => this.isLoading.set(false))
      )
      .subscribe();
  }

  /**
   * Clears the table filters and sorting
   * @param table - The table instance to clear
   */
  clear(table: Table): void {
    table.clear();
  }

  /**
   * Opens the create user modal dialog
   */
  createUser(): void {
    this.modalService.open(CreateUserComponent, {
      size: 'lg',
      centered: true,
    });
  }
}
