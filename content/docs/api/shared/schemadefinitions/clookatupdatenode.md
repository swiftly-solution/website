---
title: CLookAtUpdateNode
---

```csharp
public interface CLookAtUpdateNode : CUnaryUpdateNode, CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CUnaryUpdateNode>, ISchemaClass<CLookAtUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### LockWhenWaning

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLookAtUpdateNode.cs#L27)

```csharp
ref bool LockWhenWaning { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### OpFixedSettings

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLookAtUpdateNode.cs#L17)

```csharp
LookAtOpFixedSettings_t OpFixedSettings { get; }
```

#### Property Value

- [LookAtOpFixedSettings_t](/docs/api/shared/schemadefinitions/lookatopfixedsettings_t)

### ParamIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLookAtUpdateNode.cs#L21)

```csharp
CAnimParamHandle ParamIndex { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)

### ResetChild

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLookAtUpdateNode.cs#L25)

```csharp
ref bool ResetChild { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Target

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLookAtUpdateNode.cs#L19)

```csharp
ref AnimVectorSource Target { get; }
```

#### Property Value

- [AnimVectorSource](/docs/api/shared/schemadefinitions/animvectorsource)

### WeightParamIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLookAtUpdateNode.cs#L23)

```csharp
CAnimParamHandle WeightParamIndex { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)

