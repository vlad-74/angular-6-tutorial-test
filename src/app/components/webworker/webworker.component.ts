import { Component, OnInit } from '@angular/core';
import { WebworkerService } from './../../services/worker/webworker.service';
import { FACTORIAL_SCRIPT } from './../../services/factorial.script';
import { ExecutionResultsModel } from './model/execution-results.model';

@Component({
  selector: 'app-webworker',
  templateUrl: './webworker.component.html',
  styleUrls: ['./webworker.component.css']
})
export class WebworkerComponent implements OnInit {

  public maxFactorial = 1000;
  public nonWorkerResults = new ExecutionResultsModel([], 0, 0, 0);
  public workerResults = new ExecutionResultsModel([], 0, 0, 0);
  
  constructor(private workerService: WebworkerService) { }

  ngOnInit() {
  }
  
  public factorialWithWorker() {
    this.workerResults = new ExecutionResultsModel([], 0, 0, 0);
    const startTime = Date.now();

    const input = {
      host: window.location.host,
      maxFactorial: this.maxFactorial,
      path: window.location.pathname,
      protocol: window.location.protocol,
      worker: true
    };

    this.workerService.run(FACTORIAL_SCRIPT, input).then(
      (result) => {
        this.workerResults.executionResults = result.results;
        this.workerResults.executions = result.executions;
        this.workerResults.executionTime = result.time;
      }
    ).catch(console.error);

    const endTime = Date.now();
    this.workerResults.scheduleTime = (endTime - startTime) / 1000;
  }

  public factorialWithoutWorker() {
    this.nonWorkerResults = new ExecutionResultsModel([], 0, 0, 0);
    const startTime = Date.now();

    const input = {
      host: window.location.host,
      maxFactorial: this.maxFactorial,
      path: window.location.pathname,
      protocol: window.location.protocol,
      worker: false
    };

    const result = FACTORIAL_SCRIPT(input);
    this.nonWorkerResults.executionResults = result.results;
    this.nonWorkerResults.executions = result.executions;
    this.nonWorkerResults.executionTime = result.time;

    const endTime = Date.now();
    this.nonWorkerResults.scheduleTime = (endTime - startTime) / 1000;
  }

}
