---
title: CMsgGCBannedWordListResponse
---

```csharp
public interface CMsgGCBannedWordListResponse : ITypedProtobuf<CMsgGCBannedWordListResponse>, INativeHandle
```

- Implements

## Properties

### **BanListGroupId** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCBannedWordListResponse.cs#L13)

```csharp
uint BanListGroupId { get; set; }
```

- Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **WordList** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCBannedWordListResponse.cs#L16)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgGCBannedWord> WordList { get; }
```

- Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CMsgGCBannedWord](/docs/api/shared/protobufdefinitions/cmsggcbannedword)>

