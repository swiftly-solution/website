---
title: CNmChainLookatNode__CDefinition
---

# Interface CNmChainLookatNode__CDefinition

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmChainLookatNode__CDefinition.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CNmChainLookatNode__CDefinition : CNmPassthroughNode__CDefinition, CNmPoseNode__CDefinition, CNmGraphNode__CDefinition, ISchemaClass<CNmGraphNode__CDefinition>, ISchemaClass<CNmPoseNode__CDefinition>, ISchemaClass<CNmPassthroughNode__CDefinition>, ISchemaClass<CNmChainLookatNode__CDefinition>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CNmPassthroughNode__CDefinition](/docs/api/schemadefinitions/cnmpassthroughnode__cdefinition)
- [CNmPoseNode__CDefinition](/docs/api/schemadefinitions/cnmposenode__cdefinition)
- [CNmGraphNode__CDefinition](/docs/api/schemadefinitions/cnmgraphnode__cdefinition)
- [ISchemaClass<CNmGraphNode__CDefinition>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CNmPoseNode__CDefinition>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CNmPassthroughNode__CDefinition>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CNmChainLookatNode__CDefinition>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BlendTimeSeconds

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmChainLookatNode__CDefinition.cs#L24)

```csharp
ref float BlendTimeSeconds { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ChainEndBoneID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmChainLookatNode__CDefinition.cs#L18)

```csharp
ref CGlobalSymbol ChainEndBoneID { get; }
```

#### Property Value

- [CGlobalSymbol](/docs/api/natives/cglobalsymbol)

### ChainForwardDir

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmChainLookatNode__CDefinition.cs#L30)

```csharp
ref Vector ChainForwardDir { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### ChainLength

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmChainLookatNode__CDefinition.cs#L26)

```csharp
ref byte ChainLength { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### EnabledNodeIdx

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmChainLookatNode__CDefinition.cs#L22)

```csharp
ref short EnabledNodeIdx { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### IsTargetInWorldSpace

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmChainLookatNode__CDefinition.cs#L28)

```csharp
ref bool IsTargetInWorldSpace { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LookatTargetNodeIdx

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmChainLookatNode__CDefinition.cs#L20)

```csharp
ref short LookatTargetNodeIdx { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

