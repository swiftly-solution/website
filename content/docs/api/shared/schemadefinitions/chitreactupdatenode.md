---
title: CHitReactUpdateNode
---

```csharp
public interface CHitReactUpdateNode : CUnaryUpdateNode, CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CUnaryUpdateNode>, ISchemaClass<CHitReactUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **HitBoneParam** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHitReactUpdateNode.cs#L20)

```csharp
CAnimParamHandle HitBoneParam { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)

### **HitDirectionParam** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHitReactUpdateNode.cs#L24)

```csharp
CAnimParamHandle HitDirectionParam { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)

### **HitOffsetParam** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHitReactUpdateNode.cs#L22)

```csharp
CAnimParamHandle HitOffsetParam { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)

### **HitStrengthParam** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHitReactUpdateNode.cs#L26)

```csharp
CAnimParamHandle HitStrengthParam { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)

### **MinDelayBetweenHits** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHitReactUpdateNode.cs#L28)

```csharp
ref float MinDelayBetweenHits { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **OpFixedSettings** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHitReactUpdateNode.cs#L16)

```csharp
HitReactFixedSettings_t OpFixedSettings { get; }
```

#### Property Value

- [HitReactFixedSettings_t](/docs/api/shared/schemadefinitions/hitreactfixedsettings_t)

### **ResetChild** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHitReactUpdateNode.cs#L30)

```csharp
ref bool ResetChild { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **TriggerParam** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHitReactUpdateNode.cs#L18)

```csharp
CAnimParamHandle TriggerParam { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)

