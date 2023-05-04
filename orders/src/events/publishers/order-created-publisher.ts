import { Publisher, OrderCreatedEvent, Subjects } from "@dsptickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
