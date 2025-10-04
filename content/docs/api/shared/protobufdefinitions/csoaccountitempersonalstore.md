---
title: CSOAccountItemPersonalStore
---

```csharp
public interface CSOAccountItemPersonalStore : ITypedProtobuf<CSOAccountItemPersonalStore>, INativeHandle
```

#### Implements

## Properties

**GenerationTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSOAccountItemPersonalStore.cs#L13)

```csharp
uint GenerationTime { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**Items** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSOAccountItemPersonalStore.cs#L19)

```csharp
IProtobufRepeatedFieldValueType<ulong> Items { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/shared/netmessages/iprotobufrepeatedfieldvaluetype-1)<[ulong](https://learn.microsoft.com/dotnet/api/system.uint64)>

**RedeemableBalance** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSOAccountItemPersonalStore.cs#L16)

```csharp
uint RedeemableBalance { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

