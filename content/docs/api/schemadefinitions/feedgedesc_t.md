---
title: FeEdgeDesc_t
---

# Interface FeEdgeDesc_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FeEdgeDesc_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface FeEdgeDesc_t : ISchemaClass<FeEdgeDesc_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<FeEdgeDesc_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Edge

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FeEdgeDesc_t.cs#L18)

```csharp
ISchemaFixedArray<ushort> Edge { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

### Side

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FeEdgeDesc_t.cs#L21)

```csharp
SchemaUntypedField Side { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### VirtElem

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FeEdgeDesc_t.cs#L23)

```csharp
ISchemaFixedArray<ushort> VirtElem { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

