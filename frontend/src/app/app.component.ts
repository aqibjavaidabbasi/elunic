import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { ListboxModule } from 'primeng/listbox';
import { PaginatorModule } from 'primeng/paginator';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, MessagesModule, ListboxModule, PaginatorModule],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  private http = inject(HttpClient);
  message = '';
  items: any[] = [];
  newMessage = '';
  messages: any[] = [];
  totalRecords = 0;
  page = 1;

  ngOnInit() {
    this.http.get<any>('/api/hello').subscribe(data => {
      this.message = data.message;
      this.items = data.items.map((val: number) => ({ label: val.toString(), value: val }));
    });
    this.loadMessages();
  }

  sendMessage() {
    this.http.post('/api/messages', { message: this.newMessage }).subscribe(() => {
      this.newMessage = '';
      this.loadMessages();
    });
  }

  loadMessages() {
    this.http.get<any>(`/api/messages?page=${this.page}`).subscribe(data => {
      this.messages = data.messages;
      this.totalRecords = data.total;
    });
  }

  onPageChange(event: any) {
    this.page = event.page + 1;
    this.loadMessages();
  }}