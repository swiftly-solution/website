---
title: PermEntityLumpData_t
---

# Interface PermEntityLumpData_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermEntityLumpData_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface PermEntityLumpData_t : ISchemaClass<PermEntityLumpData_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<PermEntityLumpData_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ChildLumps

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermEntityLumpData_t.cs#L20)

```csharp
ref CUtlVector<CStrongHandle<InfoForResourceTypeCEntityLump>> ChildLumps { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCEntityLump](/docs/api/schemadefinitions/infoforresourcetypecentitylump)>>

### EntityKeyValues

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermEntityLumpData_t.cs#L22)

```csharp
ref CUtlLeanVector<EntityKeyValueData_t, int> EntityKeyValues { get; }
```

#### Property Value

- [CUtlLeanVector](/docs/api/natives/cutlleanvectortt)<[EntityKeyValueData_t](/docs/api/schemadefinitions/entitykeyvaluedata_t), [int](https://learn.microsoft.com/dotnet/api/system.int32)>

### Name

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermEntityLumpData_t.cs#L18)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

