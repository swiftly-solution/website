---
title: CProductInfo_SetRichPresenceLocalization_Request
---

```csharp
public interface CProductInfo_SetRichPresenceLocalization_Request : ITypedProtobuf<CProductInfo_SetRichPresenceLocalization_Request>, INativeHandle
```

#### Implements

## Properties

**Appid** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CProductInfo_SetRichPresenceLocalization_Request.cs#L13)

```csharp
uint Appid { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**Languages** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CProductInfo_SetRichPresenceLocalization_Request.cs#L16)

```csharp
IProtobufRepeatedFieldSubMessageType<CProductInfo_SetRichPresenceLocalization_Request_LanguageSection> Languages { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CProductInfo_SetRichPresenceLocalization_Request_LanguageSection](/docs/api/shared/protobufdefinitions/cproductinfo_setrichpresencelocalization_request_languagesection)>

**Steamid** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CProductInfo_SetRichPresenceLocalization_Request.cs#L19)

```csharp
ulong Steamid { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

