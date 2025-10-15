---
title: CNmGraphDefinition
---

```csharp
public interface CNmGraphDefinition : ISchemaClass<CNmGraphDefinition>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### ControlParameterIDs

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmGraphDefinition.cs#L25)

```csharp
ref CUtlVector<CGlobalSymbol> ControlParameterIDs { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CGlobalSymbol](/docs/api/shared/natives/cglobalsymbol)>

### ExternalGraphSlots

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmGraphDefinition.cs#L33)

```csharp
ref CUtlVector<CNmGraphDefinition__ExternalGraphSlot_t> ExternalGraphSlots { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CNmGraphDefinition__ExternalGraphSlot_t](/docs/api/shared/schemadefinitions/cnmgraphdefinition__externalgraphslot_t)>

### NodePaths

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmGraphDefinition.cs#L35)

```csharp
ref CUtlVector<CUtlString> NodePaths { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CUtlString](/docs/api/shared/natives/cutlstring)>

### PersistentNodeIndices

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmGraphDefinition.cs#L21)

```csharp
ref CUtlVector<short> PersistentNodeIndices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[short](https://learn.microsoft.com/dotnet/api/system.int16)>

### ReferencedGraphSlots

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmGraphDefinition.cs#L31)

```csharp
ref CUtlVector<CNmGraphDefinition__ReferencedGraphSlot_t> ReferencedGraphSlots { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CNmGraphDefinition__ReferencedGraphSlot_t](/docs/api/shared/schemadefinitions/cnmgraphdefinition__referencedgraphslot_t)>

### Resources

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmGraphDefinition.cs#L37)

```csharp
ref CUtlVector<SchemaUntypedField> Resources { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)>

### RootNodeIdx

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmGraphDefinition.cs#L23)

```csharp
ref short RootNodeIdx { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### Skeleton

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmGraphDefinition.cs#L19)

```csharp
ref CStrongHandle<InfoForResourceTypeCNmSkeleton> Skeleton { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCNmSkeleton](/docs/api/shared/schemadefinitions/infoforresourcetypecnmskeleton)>

### VariationID

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmGraphDefinition.cs#L17)

```csharp
ref CGlobalSymbol VariationID { get; }
```

#### Property Value

- [CGlobalSymbol](/docs/api/shared/natives/cglobalsymbol)

### VirtualParameterIDs

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmGraphDefinition.cs#L27)

```csharp
ref CUtlVector<CGlobalSymbol> VirtualParameterIDs { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CGlobalSymbol](/docs/api/shared/natives/cglobalsymbol)>

### VirtualParameterNodeIndices

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmGraphDefinition.cs#L29)

```csharp
ref CUtlVector<short> VirtualParameterNodeIndices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[short](https://learn.microsoft.com/dotnet/api/system.int16)>

