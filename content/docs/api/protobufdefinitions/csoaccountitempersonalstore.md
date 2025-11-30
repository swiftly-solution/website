---
title: CSOAccountItemPersonalStore
---

# Interface CSOAccountItemPersonalStore

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSOAccountItemPersonalStore.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CSOAccountItemPersonalStore : ITypedProtobuf<CSOAccountItemPersonalStore>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CSOAccountItemPersonalStore>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### GenerationTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSOAccountItemPersonalStore.cs#L13)

```csharp
uint GenerationTime { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Items

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSOAccountItemPersonalStore.cs#L19)

```csharp
IProtobufRepeatedFieldValueType<ulong> Items { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/netmessages/iprotobufrepeatedfieldvaluetypet)<[ulong](https://learn.microsoft.com/dotnet/api/system.uint64)>

### RedeemableBalance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSOAccountItemPersonalStore.cs#L16)

```csharp
uint RedeemableBalance { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

