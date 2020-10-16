import { Component, EventEmitter, Output} from "@angular/core";
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { Filter } from '../../models/filter';


@Component({
  selector: "app-filter",
  templateUrl: "filter.component.html",
  styleUrls: ["filter.component.scss"],
})

export class FilterComponent {
    faFilter = faFilter;
    filterTypes = Filter;
    selectedfilter: Filter;
    @Output() filterChanged: EventEmitter<Filter> = new EventEmitter();

    constructor() {
        this.selectedfilter = Filter.ALL;
    }

    setFilter(filter: Filter): void {
        this.selectedfilter = filter;
        this.filterChanged.next(this.selectedfilter);
    }
}
