---
title: CWorkshop_SetItemPaymentRules_Request
---

```csharp
public interface CWorkshop_SetItemPaymentRules_Request : ITypedProtobuf<CWorkshop_SetItemPaymentRules_Request>, INativeHandle
```

#### Implements

## Properties

### Appid

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CWorkshop_SetItemPaymentRules_Request.cs#L13)

```csharp
uint Appid { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### AssociatedWorkshopFileForDirectPayments

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CWorkshop_SetItemPaymentRules_Request.cs#L31)

```csharp
CWorkshop_SetItemPaymentRules_Request_WorkshopDirectPaymentRule AssociatedWorkshopFileForDirectPayments { get; }
```

#### Property Value

- [CWorkshop_SetItemPaymentRules_Request_WorkshopDirectPaymentRule](/docs/api/shared/protobufdefinitions/cworkshop_setitempaymentrules_request_workshopdirectpaymentrule)

### AssociatedWorkshopFiles

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CWorkshop_SetItemPaymentRules_Request.cs#L19)

```csharp
IProtobufRepeatedFieldSubMessageType<CWorkshop_SetItemPaymentRules_Request_WorkshopItemPaymentRule> AssociatedWorkshopFiles { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CWorkshop_SetItemPaymentRules_Request_WorkshopItemPaymentRule](/docs/api/shared/protobufdefinitions/cworkshop_setitempaymentrules_request_workshopitempaymentrule)>

### Gameitemid

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CWorkshop_SetItemPaymentRules_Request.cs#L16)

```csharp
uint Gameitemid { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### MakeWorkshopFilesSubscribable

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CWorkshop_SetItemPaymentRules_Request.cs#L28)

```csharp
bool MakeWorkshopFilesSubscribable { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### PartnerAccounts

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CWorkshop_SetItemPaymentRules_Request.cs#L22)

```csharp
IProtobufRepeatedFieldSubMessageType<CWorkshop_SetItemPaymentRules_Request_PartnerItemPaymentRule> PartnerAccounts { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CWorkshop_SetItemPaymentRules_Request_PartnerItemPaymentRule](/docs/api/shared/protobufdefinitions/cworkshop_setitempaymentrules_request_partneritempaymentrule)>

### ValidateOnly

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CWorkshop_SetItemPaymentRules_Request.cs#L25)

```csharp
bool ValidateOnly { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

