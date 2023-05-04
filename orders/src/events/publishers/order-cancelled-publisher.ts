import { Subjects, Publisher, OrderCancelledEvent } from "@dsptickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
