---
title: PermEntityLumpData_t
---

```csharp
public interface PermEntityLumpData_t : ISchemaClass<PermEntityLumpData_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### ChildLumps

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermEntityLumpData_t.cs#L19)

```csharp
ref CUtlVector<CStrongHandle<InfoForResourceTypeCEntityLump>> ChildLumps { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCEntityLump](/docs/api/shared/schemadefinitions/infoforresourcetypecentitylump)>>

### EntityKeyValues

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermEntityLumpData_t.cs#L21)

```csharp
ref CUtlLeanVector<EntityKeyValueData_t, int> EntityKeyValues { get; }
```

#### Property Value

- [CUtlLeanVector](/docs/api/shared/natives/cutlleanvector-2)<[EntityKeyValueData_t](/docs/api/shared/schemadefinitions/entitykeyvaluedata_t), [int](https://learn.microsoft.com/dotnet/api/system.int32)>

### Name

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermEntityLumpData_t.cs#L17)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

