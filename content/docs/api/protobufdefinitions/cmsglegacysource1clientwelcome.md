---
title: CMsgLegacySource1ClientWelcome
---

# Interface CMsgLegacySource1ClientWelcome

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgLegacySource1ClientWelcome.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMsgLegacySource1ClientWelcome : ITypedProtobuf<CMsgLegacySource1ClientWelcome>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CMsgLegacySource1ClientWelcome>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Balance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgLegacySource1ClientWelcome.cs#L37)

```csharp
uint Balance { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### BalanceUrl

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgLegacySource1ClientWelcome.cs#L40)

```csharp
string BalanceUrl { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Currency

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgLegacySource1ClientWelcome.cs#L34)

```csharp
uint Currency { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GameData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgLegacySource1ClientWelcome.cs#L16)

```csharp
byte[] GameData { get; set; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

### GameData2

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgLegacySource1ClientWelcome.cs#L28)

```csharp
byte[] GameData2 { get; set; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

### Location

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgLegacySource1ClientWelcome.cs#L25)

```csharp
CMsgLegacySource1ClientWelcome_Location Location { get; }
```

#### Property Value

- [CMsgLegacySource1ClientWelcome_Location](/docs/api/protobufdefinitions/cmsglegacysource1clientwelcome_location)

### OutofdateSubscribedCaches

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgLegacySource1ClientWelcome.cs#L19)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgSOCacheSubscribed> OutofdateSubscribedCaches { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CMsgSOCacheSubscribed](/docs/api/protobufdefinitions/cmsgsocachesubscribed)>

### Rtime32GcWelcomeTimestamp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgLegacySource1ClientWelcome.cs#L31)

```csharp
uint Rtime32GcWelcomeTimestamp { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### TxnCountryCode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgLegacySource1ClientWelcome.cs#L43)

```csharp
string TxnCountryCode { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### UptodateSubscribedCaches

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgLegacySource1ClientWelcome.cs#L22)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgSOCacheSubscriptionCheck> UptodateSubscribedCaches { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CMsgSOCacheSubscriptionCheck](/docs/api/protobufdefinitions/cmsgsocachesubscriptioncheck)>

### Version

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgLegacySource1ClientWelcome.cs#L13)

```csharp
uint Version { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

