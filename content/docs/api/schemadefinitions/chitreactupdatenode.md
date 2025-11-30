---
title: CHitReactUpdateNode
---

# Interface CHitReactUpdateNode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHitReactUpdateNode.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CHitReactUpdateNode : CUnaryUpdateNode, CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CUnaryUpdateNode>, ISchemaClass<CHitReactUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CUnaryUpdateNode](/docs/api/schemadefinitions/cunaryupdatenode)
- [CAnimUpdateNodeBase](/docs/api/schemadefinitions/canimupdatenodebase)
- [ISchemaClass<CAnimUpdateNodeBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CUnaryUpdateNode>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CHitReactUpdateNode>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### HitBoneParam

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHitReactUpdateNode.cs#L22)

```csharp
CAnimParamHandle HitBoneParam { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/schemadefinitions/canimparamhandle)

### HitDirectionParam

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHitReactUpdateNode.cs#L26)

```csharp
CAnimParamHandle HitDirectionParam { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/schemadefinitions/canimparamhandle)

### HitOffsetParam

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHitReactUpdateNode.cs#L24)

```csharp
CAnimParamHandle HitOffsetParam { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/schemadefinitions/canimparamhandle)

### HitStrengthParam

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHitReactUpdateNode.cs#L28)

```csharp
CAnimParamHandle HitStrengthParam { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/schemadefinitions/canimparamhandle)

### MinDelayBetweenHits

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHitReactUpdateNode.cs#L30)

```csharp
ref float MinDelayBetweenHits { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OpFixedSettings

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHitReactUpdateNode.cs#L18)

```csharp
HitReactFixedSettings_t OpFixedSettings { get; }
```

#### Property Value

- [HitReactFixedSettings_t](/docs/api/schemadefinitions/hitreactfixedsettings_t)

### ResetChild

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHitReactUpdateNode.cs#L32)

```csharp
ref bool ResetChild { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TriggerParam

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHitReactUpdateNode.cs#L20)

```csharp
CAnimParamHandle TriggerParam { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/schemadefinitions/canimparamhandle)

