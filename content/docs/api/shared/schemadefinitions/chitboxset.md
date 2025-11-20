---
title: CHitBoxSet
---

```csharp
public interface CHitBoxSet : ISchemaClass<CHitBoxSet>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### HitBoxes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHitBoxSet.cs#L22)

```csharp
ref CUtlVector<CHitBox> HitBoxes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CHitBox](/docs/api/shared/schemadefinitions/chitbox)>

### Name

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHitBoxSet.cs#L18)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### NameHash

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHitBoxSet.cs#L20)

```csharp
ref uint NameHash { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### SourceFilename

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHitBoxSet.cs#L24)

```csharp
string SourceFilename { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

