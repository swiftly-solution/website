---
title: CWorkshop_SetItemPaymentRules_Request
---

# Interface CWorkshop_SetItemPaymentRules_Request

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CWorkshop_SetItemPaymentRules_Request.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CWorkshop_SetItemPaymentRules_Request : ITypedProtobuf<CWorkshop_SetItemPaymentRules_Request>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CWorkshop_SetItemPaymentRules_Request>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Appid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CWorkshop_SetItemPaymentRules_Request.cs#L13)

```csharp
uint Appid { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### AssociatedWorkshopFileForDirectPayments

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CWorkshop_SetItemPaymentRules_Request.cs#L31)

```csharp
CWorkshop_SetItemPaymentRules_Request_WorkshopDirectPaymentRule AssociatedWorkshopFileForDirectPayments { get; }
```

#### Property Value

- [CWorkshop_SetItemPaymentRules_Request_WorkshopDirectPaymentRule](/docs/api/protobufdefinitions/cworkshop_setitempaymentrules_request_workshopdirectpaymentrule)

### AssociatedWorkshopFiles

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CWorkshop_SetItemPaymentRules_Request.cs#L19)

```csharp
IProtobufRepeatedFieldSubMessageType<CWorkshop_SetItemPaymentRules_Request_WorkshopItemPaymentRule> AssociatedWorkshopFiles { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CWorkshop_SetItemPaymentRules_Request_WorkshopItemPaymentRule](/docs/api/protobufdefinitions/cworkshop_setitempaymentrules_request_workshopitempaymentrule)>

### Gameitemid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CWorkshop_SetItemPaymentRules_Request.cs#L16)

```csharp
uint Gameitemid { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### MakeWorkshopFilesSubscribable

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CWorkshop_SetItemPaymentRules_Request.cs#L28)

```csharp
bool MakeWorkshopFilesSubscribable { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### PartnerAccounts

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CWorkshop_SetItemPaymentRules_Request.cs#L22)

```csharp
IProtobufRepeatedFieldSubMessageType<CWorkshop_SetItemPaymentRules_Request_PartnerItemPaymentRule> PartnerAccounts { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CWorkshop_SetItemPaymentRules_Request_PartnerItemPaymentRule](/docs/api/protobufdefinitions/cworkshop_setitempaymentrules_request_partneritempaymentrule)>

### ValidateOnly

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CWorkshop_SetItemPaymentRules_Request.cs#L25)

```csharp
bool ValidateOnly { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

