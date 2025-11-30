---
title: CRecipientFilter
---

# Struct CRecipientFilter

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CRecipientFilter.cs#L14)

**Namespace**: [SwiftlyS2.Shared.Natives](/docs/api/natives)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public struct CRecipientFilter
```

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### CRecipientFilter(NetChannelBufType_t, bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CRecipientFilter.cs#L24)

```csharp
public CRecipientFilter(NetChannelBufType_t BufType = NetChannelBufType_t.BUF_RELIABLE, bool bInitMessage = false)
```

#### Parameters

- **BufType**: [NetChannelBufType_t](/docs/api/natives/netchannelbuftype_t)
- **bInitMessage**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Fields

### BufferType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CRecipientFilter.cs#L20)

```csharp
public NetChannelBufType_t BufferType
```

#### Field Value

- [NetChannelBufType_t](/docs/api/natives/netchannelbuftype_t)

### DisabledPrediction

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CRecipientFilter.cs#L22)

```csharp
public bool DisabledPrediction
```

#### Field Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InitMessage

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CRecipientFilter.cs#L21)

```csharp
public bool InitMessage
```

#### Field Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### PredictedSlot

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CRecipientFilter.cs#L19)

```csharp
public int PredictedSlot
```

#### Field Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RecipientsMask

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CRecipientFilter.cs#L18)

```csharp
public ulong RecipientsMask
```

#### Field Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

## Methods

### AddAllPlayers()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CRecipientFilter.cs#L61)

```csharp
public void AddAllPlayers()
```

### AddRecipient(int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CRecipientFilter.cs#L71)

```csharp
public void AddRecipient(int playerid)
```

#### Parameters

- **playerid**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### FromMask(ulong)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CRecipientFilter.cs#L32)

```csharp
public static CRecipientFilter FromMask(ulong playerMask)
```

#### Parameters

- **playerMask**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

#### Returns

- [CRecipientFilter](/docs/api/natives/crecipientfilter)

### FromPlayers(params int[])

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CRecipientFilter.cs#L39)

```csharp
public static CRecipientFilter FromPlayers(params int[] players)
```

#### Parameters

- **players**: [int](https://learn.microsoft.com/dotnet/api/system.int32)[]

#### Returns

- [CRecipientFilter](/docs/api/natives/crecipientfilter)

### FromSingle(int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CRecipientFilter.cs#L49)

```csharp
public static CRecipientFilter FromSingle(int player)
```

#### Parameters

- **player**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [CRecipientFilter](/docs/api/natives/crecipientfilter)

### GetRecipientCount()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CRecipientFilter.cs#L85)

```csharp
public int GetRecipientCount()
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GetRecipients()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CRecipientFilter.cs#L98)

```csharp
public IEnumerable<int> GetRecipients()
```

#### Returns

- [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### RemoveAllPlayers()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CRecipientFilter.cs#L66)

```csharp
public void RemoveAllPlayers()
```

### RemoveRecipient(int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CRecipientFilter.cs#L78)

```csharp
public void RemoveRecipient(int playerid)
```

#### Parameters

- **playerid**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ToMask()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CRecipientFilter.cs#L56)

```csharp
public ulong ToMask()
```

#### Returns

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

