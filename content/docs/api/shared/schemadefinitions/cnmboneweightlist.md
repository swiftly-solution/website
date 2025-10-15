---
title: CNmBoneWeightList
---

```csharp
public interface CNmBoneWeightList : ISchemaClass<CNmBoneWeightList>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BoneIDs

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmBoneWeightList.cs#L20)

```csharp
ref CUtlVector<CGlobalSymbol> BoneIDs { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CGlobalSymbol](/docs/api/shared/natives/cglobalsymbol)>

### SkeletonName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmBoneWeightList.cs#L18)

```csharp
SchemaUntypedField SkeletonName { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### Weights

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmBoneWeightList.cs#L22)

```csharp
ref CUtlVector<float> Weights { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

