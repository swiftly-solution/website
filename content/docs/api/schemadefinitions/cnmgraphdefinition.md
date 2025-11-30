---
title: CNmGraphDefinition
---

# Interface CNmGraphDefinition

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmGraphDefinition.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CNmGraphDefinition : ISchemaClass<CNmGraphDefinition>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CNmGraphDefinition>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ControlParameterIDs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmGraphDefinition.cs#L26)

```csharp
ref CUtlVector<CGlobalSymbol> ControlParameterIDs { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CGlobalSymbol](/docs/api/natives/cglobalsymbol)>

### ExternalGraphSlots

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmGraphDefinition.cs#L34)

```csharp
ref CUtlVector<CNmGraphDefinition__ExternalGraphSlot_t> ExternalGraphSlots { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CNmGraphDefinition__ExternalGraphSlot_t](/docs/api/schemadefinitions/cnmgraphdefinition__externalgraphslot_t)>

### NodePaths

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmGraphDefinition.cs#L36)

```csharp
ref CUtlVector<CUtlString> NodePaths { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CUtlString](/docs/api/natives/cutlstring)>

### PersistentNodeIndices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmGraphDefinition.cs#L22)

```csharp
ref CUtlVector<short> PersistentNodeIndices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[short](https://learn.microsoft.com/dotnet/api/system.int16)>

### ReferencedGraphSlots

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmGraphDefinition.cs#L32)

```csharp
ref CUtlVector<CNmGraphDefinition__ReferencedGraphSlot_t> ReferencedGraphSlots { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CNmGraphDefinition__ReferencedGraphSlot_t](/docs/api/schemadefinitions/cnmgraphdefinition__referencedgraphslot_t)>

### Resources

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmGraphDefinition.cs#L38)

```csharp
ref CUtlVector<SchemaUntypedField> Resources { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[SchemaUntypedField](/docs/api/schemas/schemauntypedfield)>

### RootNodeIdx

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmGraphDefinition.cs#L24)

```csharp
ref short RootNodeIdx { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### Skeleton

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmGraphDefinition.cs#L20)

```csharp
ref CStrongHandle<InfoForResourceTypeCNmSkeleton> Skeleton { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCNmSkeleton](/docs/api/schemadefinitions/infoforresourcetypecnmskeleton)>

### VariationID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmGraphDefinition.cs#L18)

```csharp
ref CGlobalSymbol VariationID { get; }
```

#### Property Value

- [CGlobalSymbol](/docs/api/natives/cglobalsymbol)

### VirtualParameterIDs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmGraphDefinition.cs#L28)

```csharp
ref CUtlVector<CGlobalSymbol> VirtualParameterIDs { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CGlobalSymbol](/docs/api/natives/cglobalsymbol)>

### VirtualParameterNodeIndices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmGraphDefinition.cs#L30)

```csharp
ref CUtlVector<short> VirtualParameterNodeIndices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[short](https://learn.microsoft.com/dotnet/api/system.int16)>

