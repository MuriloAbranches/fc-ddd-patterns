import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import CustomerAddressChangedEvent from "../customer-address-changed.event";

export default class SendLogHandler
    implements EventHandlerInterface<CustomerAddressChangedEvent>
{
    handle(event: CustomerAddressChangedEvent): void {
        console.log(`${event.eventData.id},
                  ${event.eventData.name} alterado para ${event.eventData.address}`);
    }
}