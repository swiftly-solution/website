---
title: TBuffer>
---

# Struct CUtlVectorFixedGrowable

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVectorFixedGrowable.cs#L6)

**Namespace**: [SwiftlyS2.Shared.Natives](/docs/api/natives)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public struct CUtlVectorFixedGrowable<T, TBuffer> where T : unmanaged where TBuffer : unmanaged
```

#### Type Parameters

- **T**: 
- **TBuffer**: 

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### CUtlVectorFixedGrowable(int, int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVectorFixedGrowable.cs#L14)

```csharp
public CUtlVectorFixedGrowable(int maxSize, int growSize = 0)
```

#### Parameters

- **maxSize**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **growSize**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Properties

### Base

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVectorFixedGrowable.cs#L56)

```csharp
public readonly nint Base { get; }
```

#### Property Value

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### Count

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVectorFixedGrowable.cs#L55)

```csharp
public readonly int Count { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MaxSize

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVectorFixedGrowable.cs#L53)

```csharp
public readonly int MaxSize { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### this

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVectorFixedGrowable.cs#L41)

```csharp
public ref T this[int index] { get; }
```

#### Property Value

- T

## Methods

### AddToTail(T)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVectorFixedGrowable.cs#L30)

```csharp
public int AddToTail(T value)
```

#### Parameters

- **value**: T

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RemoveAll()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVectorFixedGrowable.cs#L25)

```csharp
public void RemoveAll()
```

### SetSize(int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVectorFixedGrowable.cs#L20)

```csharp
public void SetSize(int size)
```

#### Parameters

- **size**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

