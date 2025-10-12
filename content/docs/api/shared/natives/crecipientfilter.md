---
title: CRecipientFilter
---

```csharp
public struct CRecipientFilter
```

#### Inherited Members

## Constructors

### CRecipientFilter(NetChannelBufType_t, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Natives/Structs/CRecipientFilter.cs#L21)

```csharp
public CRecipientFilter(NetChannelBufType_t BufType = NetChannelBufType_t.BUF_RELIABLE, bool bInitMessage = false)
```

#### Parameters

- **BufType**: [NetChannelBufType_t](/docs/api/shared/natives/netchannelbuftype_t)
- **bInitMessage**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Fields

### BufferType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Natives/Structs/CRecipientFilter.cs#L18)

```csharp
public NetChannelBufType_t BufferType
```

#### Field Value

- [NetChannelBufType_t](/docs/api/shared/natives/netchannelbuftype_t)

### InitMessage

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Natives/Structs/CRecipientFilter.cs#L19)

```csharp
public bool InitMessage
```

#### Field Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RecipientsMask

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Natives/Structs/CRecipientFilter.cs#L17)

```csharp
public ulong RecipientsMask
```

#### Field Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

## Methods

### AddAllPlayers()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Natives/Structs/CRecipientFilter.cs#L57)

```csharp
public void AddAllPlayers()
```

### AddRecipient(int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Natives/Structs/CRecipientFilter.cs#L68)

```csharp
public void AddRecipient(int playerid)
```

#### Parameters

- **playerid**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### FromMask(ulong)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Natives/Structs/CRecipientFilter.cs#L29)

```csharp
public static CRecipientFilter FromMask(ulong playerMask)
```

#### Parameters

- **playerMask**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

#### Returns

- [CRecipientFilter](/docs/api/shared/natives/crecipientfilter)

### FromPlayers(params int[])

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Natives/Structs/CRecipientFilter.cs#L36)

```csharp
public static CRecipientFilter FromPlayers(params int[] players)
```

#### Parameters

- **players**: [int](https://learn.microsoft.com/dotnet/api/system.int32)[]

#### Returns

- [CRecipientFilter](/docs/api/shared/natives/crecipientfilter)

### FromSingle(int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Natives/Structs/CRecipientFilter.cs#L45)

```csharp
public static CRecipientFilter FromSingle(int player)
```

#### Parameters

- **player**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [CRecipientFilter](/docs/api/shared/natives/crecipientfilter)

### GetRecipientCount()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Natives/Structs/CRecipientFilter.cs#L82)

```csharp
public int GetRecipientCount()
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RemoveAllPlayers()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Natives/Structs/CRecipientFilter.cs#L63)

```csharp
public void RemoveAllPlayers()
```

### RemoveRecipient(int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Natives/Structs/CRecipientFilter.cs#L75)

```csharp
public void RemoveRecipient(int playerid)
```

#### Parameters

- **playerid**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ToMask()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Natives/Structs/CRecipientFilter.cs#L52)

```csharp
public ulong ToMask()
```

#### Returns

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

