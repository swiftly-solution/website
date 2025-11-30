---
title: CProductInfo_SetRichPresenceLocalization_Request
---

# Interface CProductInfo_SetRichPresenceLocalization_Request

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CProductInfo_SetRichPresenceLocalization_Request.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CProductInfo_SetRichPresenceLocalization_Request : ITypedProtobuf<CProductInfo_SetRichPresenceLocalization_Request>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CProductInfo_SetRichPresenceLocalization_Request>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Appid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CProductInfo_SetRichPresenceLocalization_Request.cs#L13)

```csharp
uint Appid { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Languages

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CProductInfo_SetRichPresenceLocalization_Request.cs#L16)

```csharp
IProtobufRepeatedFieldSubMessageType<CProductInfo_SetRichPresenceLocalization_Request_LanguageSection> Languages { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CProductInfo_SetRichPresenceLocalization_Request_LanguageSection](/docs/api/protobufdefinitions/cproductinfo_setrichpresencelocalization_request_languagesection)>

### Steamid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CProductInfo_SetRichPresenceLocalization_Request.cs#L19)

```csharp
ulong Steamid { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

