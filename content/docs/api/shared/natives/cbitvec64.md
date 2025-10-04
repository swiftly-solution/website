---
title: CBitVec64
---

```csharp
public struct CBitVec64 : ICBitVec
```

#### Implements

#### Inherited Members

## Constructors

**CBitVec64()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CBitVec.cs#L98)

```csharp
public CBitVec64()
```

## Fields

**_buffer** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CBitVec.cs#L96)

```csharp
public uint* _buffer
```

#### Field Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)*

## Methods

**Clear(uint)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CBitVec.cs#L139)

```csharp
public void Clear(uint index)
```

#### Parameters

- **index**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**Clear(int)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CBitVec.cs#L147)

```csharp
public void Clear(int index)
```

#### Parameters

- **index**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

**ClearAll()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CBitVec.cs#L107)

```csharp
public void ClearAll()
```

**Count()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CBitVec.cs#L171)

```csharp
public int Count()
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**GetNumBits()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CBitVec.cs#L105)

```csharp
public uint GetNumBits()
```

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**IsAllClear()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CBitVec.cs#L179)

```csharp
public bool IsAllClear()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**IsFixedSize()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CBitVec.cs#L103)

```csharp
public bool IsFixedSize()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**IsSet(uint)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CBitVec.cs#L155)

```csharp
public bool IsSet(uint index)
```

#### Parameters

- **index**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**IsSet(int)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CBitVec.cs#L163)

```csharp
public bool IsSet(int index)
```

#### Parameters

- **index**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**NumDWords()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CBitVec.cs#L104)

```csharp
public uint NumDWords()
```

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**Set(uint)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CBitVec.cs#L123)

```csharp
public void Set(uint index)
```

#### Parameters

- **index**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**Set(int)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CBitVec.cs#L131)

```csharp
public void Set(int index)
```

#### Parameters

- **index**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

**SetAll()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CBitVec.cs#L115)

```csharp
public void SetAll()
```

