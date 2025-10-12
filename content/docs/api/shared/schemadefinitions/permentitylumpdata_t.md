---
title: PermEntityLumpData_t
---

```csharp
public interface PermEntityLumpData_t : ISchemaClass<PermEntityLumpData_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### ChildLumps

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermEntityLumpData_t.cs#L18)

```csharp
ref CUtlVector<CStrongHandle<InfoForResourceTypeCEntityLump>> ChildLumps { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCEntityLump](/docs/api/shared/schemadefinitions/infoforresourcetypecentitylump)>>

### EntityKeyValues

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermEntityLumpData_t.cs#L21)

```csharp
SchemaUntypedField EntityKeyValues { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### Name

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PermEntityLumpData_t.cs#L16)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

