---
title: CWorkshop_PopulateItemDescriptions_Request
---

# Interface CWorkshop_PopulateItemDescriptions_Request

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CWorkshop_PopulateItemDescriptions_Request.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CWorkshop_PopulateItemDescriptions_Request : ITypedProtobuf<CWorkshop_PopulateItemDescriptions_Request>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CWorkshop_PopulateItemDescriptions_Request>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Appid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CWorkshop_PopulateItemDescriptions_Request.cs#L13)

```csharp
uint Appid { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Languages

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CWorkshop_PopulateItemDescriptions_Request.cs#L16)

```csharp
IProtobufRepeatedFieldSubMessageType<CWorkshop_PopulateItemDescriptions_Request_ItemDescriptionsLanguageBlock> Languages { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CWorkshop_PopulateItemDescriptions_Request_ItemDescriptionsLanguageBlock](/docs/api/protobufdefinitions/cworkshop_populateitemdescriptions_request_itemdescriptionslanguageblock)>

