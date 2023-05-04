import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@dsptickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
