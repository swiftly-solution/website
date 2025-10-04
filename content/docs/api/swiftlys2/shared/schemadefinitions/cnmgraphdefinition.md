---
title: CNmGraphDefinition
---

```csharp
public interface CNmGraphDefinition : ISchemaClass<CNmGraphDefinition>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**ControlParameterIDs** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmGraphDefinition.cs#L24)

```csharp
ref CUtlVector<CGlobalSymbol> ControlParameterIDs { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector-1)<[CGlobalSymbol](/docs/api/shared/natives/cglobalsymbol)>

**ExternalGraphSlots** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmGraphDefinition.cs#L34)

```csharp
ref CUtlVector ExternalGraphSlots { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector)

**NodePaths** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmGraphDefinition.cs#L36)

```csharp
ref CUtlVector<CUtlString> NodePaths { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector-1)<[CUtlString](/docs/api/shared/natives/cutlstring)>

**PersistentNodeIndices** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmGraphDefinition.cs#L20)

```csharp
ref CUtlVector<short> PersistentNodeIndices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector-1)<[short](https://learn.microsoft.com/dotnet/api/system.int16)>

**ReferencedGraphSlots** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmGraphDefinition.cs#L31)

```csharp
ref CUtlVector ReferencedGraphSlots { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector)

**Resources** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmGraphDefinition.cs#L39)

```csharp
ref CUtlVector Resources { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector)

**RootNodeIdx** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmGraphDefinition.cs#L22)

```csharp
ref short RootNodeIdx { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

**Skeleton** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmGraphDefinition.cs#L18)

```csharp
ref CStrongHandle<InfoForResourceTypeCNmSkeleton> Skeleton { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCNmSkeleton](/docs/api/shared/schemadefinitions/infoforresourcetypecnmskeleton)>

**VariationID** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmGraphDefinition.cs#L16)

```csharp
ref CGlobalSymbol VariationID { get; }
```

#### Property Value

- [CGlobalSymbol](/docs/api/shared/natives/cglobalsymbol)

**VirtualParameterIDs** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmGraphDefinition.cs#L26)

```csharp
ref CUtlVector<CGlobalSymbol> VirtualParameterIDs { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector-1)<[CGlobalSymbol](/docs/api/shared/natives/cglobalsymbol)>

**VirtualParameterNodeIndices** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmGraphDefinition.cs#L28)

```csharp
ref CUtlVector<short> VirtualParameterNodeIndices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector-1)<[short](https://learn.microsoft.com/dotnet/api/system.int16)>

