---
title: CRecipientFilter
---

```csharp
public struct CRecipientFilter
```

#### Inherited Members

## Constructors

### CRecipientFilter(NetChannelBufType_t, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CRecipientFilter.cs#L24)

```csharp
public CRecipientFilter(NetChannelBufType_t BufType = NetChannelBufType_t.BUF_RELIABLE, bool bInitMessage = false)
```

#### Parameters

- **BufType**: [NetChannelBufType_t](/docs/api/shared/natives/netchannelbuftype_t)
- **bInitMessage**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Fields

### BufferType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CRecipientFilter.cs#L20)

```csharp
public NetChannelBufType_t BufferType
```

#### Field Value

- [NetChannelBufType_t](/docs/api/shared/natives/netchannelbuftype_t)

### DisabledPrediction

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CRecipientFilter.cs#L22)

```csharp
public bool DisabledPrediction
```

#### Field Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InitMessage

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CRecipientFilter.cs#L21)

```csharp
public bool InitMessage
```

#### Field Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### PredictedSlot

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CRecipientFilter.cs#L19)

```csharp
public int PredictedSlot
```

#### Field Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RecipientsMask

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CRecipientFilter.cs#L18)

```csharp
public ulong RecipientsMask
```

#### Field Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

## Methods

### AddAllPlayers()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CRecipientFilter.cs#L61)

```csharp
public void AddAllPlayers()
```

### AddRecipient(int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CRecipientFilter.cs#L71)

```csharp
public void AddRecipient(int playerid)
```

#### Parameters

- **playerid**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### FromMask(ulong)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CRecipientFilter.cs#L32)

```csharp
public static CRecipientFilter FromMask(ulong playerMask)
```

#### Parameters

- **playerMask**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

#### Returns

- [CRecipientFilter](/docs/api/shared/natives/crecipientfilter)

### FromPlayers(params int[])

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CRecipientFilter.cs#L39)

```csharp
public static CRecipientFilter FromPlayers(params int[] players)
```

#### Parameters

- **players**: [int](https://learn.microsoft.com/dotnet/api/system.int32)[]

#### Returns

- [CRecipientFilter](/docs/api/shared/natives/crecipientfilter)

### FromSingle(int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CRecipientFilter.cs#L49)

```csharp
public static CRecipientFilter FromSingle(int player)
```

#### Parameters

- **player**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [CRecipientFilter](/docs/api/shared/natives/crecipientfilter)

### GetRecipientCount()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CRecipientFilter.cs#L85)

```csharp
public int GetRecipientCount()
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RemoveAllPlayers()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CRecipientFilter.cs#L66)

```csharp
public void RemoveAllPlayers()
```

### RemoveRecipient(int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CRecipientFilter.cs#L78)

```csharp
public void RemoveRecipient(int playerid)
```

#### Parameters

- **playerid**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ToMask()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CRecipientFilter.cs#L56)

```csharp
public ulong ToMask()
```

#### Returns

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

