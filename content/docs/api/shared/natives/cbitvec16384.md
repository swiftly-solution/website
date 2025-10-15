---
title: CBitVec16384
---

```csharp
public struct CBitVec16384 : ICBitVec
```

#### Implements

#### Inherited Members

## Constructors

### CBitVec16384()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CBitVec.cs#L193)

```csharp
public CBitVec16384()
```

## Fields

### _buffer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CBitVec.cs#L191)

```csharp
public uint* _buffer
```

#### Field Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)*

## Methods

### Clear(uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CBitVec.cs#L234)

```csharp
public void Clear(uint index)
```

#### Parameters

- **index**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Clear(int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CBitVec.cs#L242)

```csharp
public void Clear(int index)
```

#### Parameters

- **index**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ClearAll()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CBitVec.cs#L202)

```csharp
public void ClearAll()
```

### Count()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CBitVec.cs#L266)

```csharp
public int Count()
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GetNumBits()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CBitVec.cs#L200)

```csharp
public uint GetNumBits()
```

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### IsAllClear()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CBitVec.cs#L274)

```csharp
public bool IsAllClear()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsFixedSize()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CBitVec.cs#L198)

```csharp
public bool IsFixedSize()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsSet(uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CBitVec.cs#L250)

```csharp
public bool IsSet(uint index)
```

#### Parameters

- **index**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsSet(int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CBitVec.cs#L258)

```csharp
public bool IsSet(int index)
```

#### Parameters

- **index**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### NumDWords()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CBitVec.cs#L199)

```csharp
public uint NumDWords()
```

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Set(uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CBitVec.cs#L218)

```csharp
public void Set(uint index)
```

#### Parameters

- **index**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Set(int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CBitVec.cs#L226)

```csharp
public void Set(int index)
```

#### Parameters

- **index**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SetAll()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CBitVec.cs#L210)

```csharp
public void SetAll()
```

