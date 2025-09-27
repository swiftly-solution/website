---
title: CNmTwoBoneIKNode__CDefinition
---

```csharp
public interface CNmTwoBoneIKNode__CDefinition : CNmPassthroughNode__CDefinition, CNmPoseNode__CDefinition, CNmGraphNode__CDefinition, ISchemaClass<CNmGraphNode__CDefinition>, ISchemaClass<CNmPoseNode__CDefinition>, ISchemaClass<CNmPassthroughNode__CDefinition>, ISchemaClass<CNmTwoBoneIKNode__CDefinition>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**BlendMode** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTwoBoneIKNode__CDefinition.cs#L24)

```csharp
ref NmIKBlendMode_t BlendMode { get; }
```

#### Property Value

- [NmIKBlendMode_t](/docs/api/shared/schemadefinitions/nmikblendmode_t)

**BlendTimeSeconds** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTwoBoneIKNode__CDefinition.cs#L22)

```csharp
ref float BlendTimeSeconds { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**EffectorBoneID** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTwoBoneIKNode__CDefinition.cs#L16)

```csharp
ref CGlobalSymbol EffectorBoneID { get; }
```

#### Property Value

- [CGlobalSymbol](/docs/api/shared/natives/cglobalsymbol)

**EffectorTargetNodeIdx** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTwoBoneIKNode__CDefinition.cs#L18)

```csharp
ref short EffectorTargetNodeIdx { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

**EnabledNodeIdx** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTwoBoneIKNode__CDefinition.cs#L20)

```csharp
ref short EnabledNodeIdx { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

**IsTargetInWorldSpace** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTwoBoneIKNode__CDefinition.cs#L26)

```csharp
ref bool IsTargetInWorldSpace { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

