---
title: NmBoneMaskSetDefinition_t
---

```csharp
public interface NmBoneMaskSetDefinition_t : ISchemaClass<NmBoneMaskSetDefinition_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### ID

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/NmBoneMaskSetDefinition_t.cs#L18)

```csharp
ref CGlobalSymbol ID { get; }
```

#### Property Value

- [CGlobalSymbol](/docs/api/shared/natives/cglobalsymbol)

### PrimaryWeightList

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/NmBoneMaskSetDefinition_t.cs#L20)

```csharp
CNmBoneWeightList PrimaryWeightList { get; }
```

#### Property Value

- [CNmBoneWeightList](/docs/api/shared/schemadefinitions/cnmboneweightlist)

### SecondaryWeightLists

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/NmBoneMaskSetDefinition_t.cs#L22)

```csharp
ref CUtlLeanVector<CNmBoneWeightList, int> SecondaryWeightLists { get; }
```

#### Property Value

- [CUtlLeanVector](/docs/api/shared/natives/cutlleanvector-2)<[CNmBoneWeightList](/docs/api/shared/schemadefinitions/cnmboneweightlist), [int](https://learn.microsoft.com/dotnet/api/system.int32)>

