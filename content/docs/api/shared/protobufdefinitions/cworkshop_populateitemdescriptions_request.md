---
title: CWorkshop_PopulateItemDescriptions_Request
---

```csharp
public interface CWorkshop_PopulateItemDescriptions_Request : ITypedProtobuf<CWorkshop_PopulateItemDescriptions_Request>, INativeHandle
```

#### Implements

## Properties

### Appid

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CWorkshop_PopulateItemDescriptions_Request.cs#L13)

```csharp
uint Appid { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Languages

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CWorkshop_PopulateItemDescriptions_Request.cs#L16)

```csharp
IProtobufRepeatedFieldSubMessageType<CWorkshop_PopulateItemDescriptions_Request_ItemDescriptionsLanguageBlock> Languages { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CWorkshop_PopulateItemDescriptions_Request_ItemDescriptionsLanguageBlock](/docs/api/shared/protobufdefinitions/cworkshop_populateitemdescriptions_request_itemdescriptionslanguageblock)>

