---
title: CBitVec16384
---

# Struct CBitVec16384

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CBitVec.cs#L188)

**Namespace**: [SwiftlyS2.Shared.Natives](/docs/api/natives)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public struct CBitVec16384 : ICBitVec
```

#### Implements

- [ICBitVec](/docs/api/natives/icbitvec)

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### CBitVec16384()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CBitVec.cs#L193)

```csharp
public CBitVec16384()
```

## Fields

### _buffer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CBitVec.cs#L191)

```csharp
public uint* _buffer
```

#### Field Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)*

## Methods

### Clear(uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CBitVec.cs#L234)

```csharp
public void Clear(uint index)
```

#### Parameters

- **index**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Clear(int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CBitVec.cs#L242)

```csharp
public void Clear(int index)
```

#### Parameters

- **index**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ClearAll()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CBitVec.cs#L202)

```csharp
public void ClearAll()
```

### Count()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CBitVec.cs#L266)

```csharp
public int Count()
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GetNumBits()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CBitVec.cs#L200)

```csharp
public uint GetNumBits()
```

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### IsAllClear()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CBitVec.cs#L274)

```csharp
public bool IsAllClear()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsFixedSize()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CBitVec.cs#L198)

```csharp
public bool IsFixedSize()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsSet(uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CBitVec.cs#L250)

```csharp
public bool IsSet(uint index)
```

#### Parameters

- **index**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsSet(int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CBitVec.cs#L258)

```csharp
public bool IsSet(int index)
```

#### Parameters

- **index**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### NumDWords()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CBitVec.cs#L199)

```csharp
public uint NumDWords()
```

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Set(uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CBitVec.cs#L218)

```csharp
public void Set(uint index)
```

#### Parameters

- **index**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Set(int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CBitVec.cs#L226)

```csharp
public void Set(int index)
```

#### Parameters

- **index**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SetAll()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CBitVec.cs#L210)

```csharp
public void SetAll()
```

