import { Pipe, PipeTransform } from "@angular/core"; // Pipe est un décorateur, PipeTransform est uune interface

@Pipe({ name: "shorten" })

export class ShortenPipe implements PipeTransform {
    transform(value: string, maxLength = 50): string {
        if (value.length <= maxLength) {
            return value;
        }
        return value.substring(0, maxLength) + "...";

    }

}