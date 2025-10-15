---
title: CBoneConstraintDotToMorph
---

```csharp
public interface CBoneConstraintDotToMorph : CBoneConstraintBase, ISchemaClass<CBoneConstraintBase>, ISchemaClass<CBoneConstraintDotToMorph>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BoneName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBoneConstraintDotToMorph.cs#L17)

```csharp
string BoneName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### MorphChannelName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBoneConstraintDotToMorph.cs#L21)

```csharp
string MorphChannelName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Remap

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBoneConstraintDotToMorph.cs#L23)

```csharp
ISchemaFixedArray<float> Remap { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### TargetBoneName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBoneConstraintDotToMorph.cs#L19)

```csharp
string TargetBoneName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

