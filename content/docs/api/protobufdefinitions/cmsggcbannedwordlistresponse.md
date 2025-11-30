---
title: CMsgGCBannedWordListResponse
---

# Interface CMsgGCBannedWordListResponse

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCBannedWordListResponse.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMsgGCBannedWordListResponse : ITypedProtobuf<CMsgGCBannedWordListResponse>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CMsgGCBannedWordListResponse>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BanListGroupId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCBannedWordListResponse.cs#L13)

```csharp
uint BanListGroupId { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### WordList

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCBannedWordListResponse.cs#L16)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgGCBannedWord> WordList { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CMsgGCBannedWord](/docs/api/protobufdefinitions/cmsggcbannedword)>

