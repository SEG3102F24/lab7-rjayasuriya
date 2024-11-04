import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { AuthorsService } from '../services/authors.service';
import { Author } from '../models/author';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule], // Add CommonModule to imports array
})
export class AuthorsComponent {
  authorId!: number;
  author: Author | null = null;
  errorMessage: string = '';

  constructor(private authorsService: AuthorsService) {}

  onSubmit() {
    this.author = null;
    this.errorMessage = '';
    this.authorsService.getAuthorById(this.authorId).subscribe(
      (author: Author) => {
        this.author = author;
      },
      (error) => {
        this.errorMessage = 'Author not found.';
      }
    );
  }
}
