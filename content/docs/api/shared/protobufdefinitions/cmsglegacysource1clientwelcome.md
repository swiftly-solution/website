---
title: CMsgLegacySource1ClientWelcome
---

```csharp
public interface CMsgLegacySource1ClientWelcome : ITypedProtobuf<CMsgLegacySource1ClientWelcome>, INativeHandle
```

#### Implements

## Properties

**Balance** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgLegacySource1ClientWelcome.cs#L37)

```csharp
uint Balance { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**BalanceUrl** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgLegacySource1ClientWelcome.cs#L40)

```csharp
string BalanceUrl { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**Currency** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgLegacySource1ClientWelcome.cs#L34)

```csharp
uint Currency { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**GameData** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgLegacySource1ClientWelcome.cs#L16)

```csharp
byte[] GameData { get; set; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

**GameData2** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgLegacySource1ClientWelcome.cs#L28)

```csharp
byte[] GameData2 { get; set; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

**Location** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgLegacySource1ClientWelcome.cs#L25)

```csharp
CMsgLegacySource1ClientWelcome_Location Location { get; }
```

#### Property Value

- [CMsgLegacySource1ClientWelcome_Location](/docs/api/shared/protobufdefinitions/cmsglegacysource1clientwelcome_location)

**OutofdateSubscribedCaches** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgLegacySource1ClientWelcome.cs#L19)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgSOCacheSubscribed> OutofdateSubscribedCaches { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CMsgSOCacheSubscribed](/docs/api/shared/protobufdefinitions/cmsgsocachesubscribed)>

**Rtime32GcWelcomeTimestamp** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgLegacySource1ClientWelcome.cs#L31)

```csharp
uint Rtime32GcWelcomeTimestamp { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**TxnCountryCode** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgLegacySource1ClientWelcome.cs#L43)

```csharp
string TxnCountryCode { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**UptodateSubscribedCaches** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgLegacySource1ClientWelcome.cs#L22)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgSOCacheSubscriptionCheck> UptodateSubscribedCaches { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CMsgSOCacheSubscriptionCheck](/docs/api/shared/protobufdefinitions/cmsgsocachesubscriptioncheck)>

**Version** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgLegacySource1ClientWelcome.cs#L13)

```csharp
uint Version { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

