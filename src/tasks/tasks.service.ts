import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  getTasks() {
    return {
      task1: {
        id: 1,
        title: 'task1',
        description: 'task1 description',
        status: 'OPEN',
      },
      task2: {
        id: 2,
        title: 'task2',
        description: 'task2 description',
        status: 'OPEN',
      },
      task3: {
        id: 3,
        title: 'task3',
        description: 'task3 description',
        status: 'OPEN',
      },
    };
  }

  getTask() {
    return {
      id: 1,
      title: 'task1',
      description: 'task1 description',
      status: 'OPEN',
    };
  }
}
