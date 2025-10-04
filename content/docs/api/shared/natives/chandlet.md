---
title: CHandle<T>
---

```csharp
public struct CHandle<T> where T : class, ISchemaClass<T>
```

#### Type Parameters

- **T**: 

#### Inherited Members

## Constructors

**CHandle(uint)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CHandle.cs#L17)

```csharp
public CHandle(uint raw)
```

#### Parameters

- **raw**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Properties

**EntityIndex** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CHandle.cs#L32)

```csharp
public readonly uint EntityIndex { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**IsValid** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CHandle.cs#L36)

```csharp
public readonly bool IsValid { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**Raw** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CHandle.cs#L12)

```csharp
public uint Raw { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**SerialNumber** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CHandle.cs#L34)

```csharp
public readonly uint SerialNumber { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**Value** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CHandle.cs#L21)

```csharp
public readonly T? Value { get; }
```

#### Property Value

- T?

## Operators

**implicit operator T(CHandle<T>)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CHandle.cs#L39)

```csharp
public static implicit operator T(CHandle<T> handle)
```

#### Parameters

- **handle**: [CHandle](/docs/api/shared/natives/chandle-1)<T>

#### Returns

- T

