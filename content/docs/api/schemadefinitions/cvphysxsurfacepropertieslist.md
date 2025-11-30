---
title: CVPhysXSurfacePropertiesList
---

# Interface CVPhysXSurfacePropertiesList

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVPhysXSurfacePropertiesList.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CVPhysXSurfacePropertiesList : ISchemaClass<CVPhysXSurfacePropertiesList>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CVPhysXSurfacePropertiesList>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### SurfacePropertiesList

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVPhysXSurfacePropertiesList.cs#L18)

```csharp
ref CUtlVector<PointerTo<CPhysSurfaceProperties>> SurfacePropertiesList { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[PointerTo](/docs/api/natives/pointertot)<[CPhysSurfaceProperties](/docs/api/schemadefinitions/cphyssurfaceproperties)>>

