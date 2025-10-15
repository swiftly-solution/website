---
title: CNmIDEventNode__CDefinition
---

```csharp
public interface CNmIDEventNode__CDefinition : CNmIDValueNode__CDefinition, CNmValueNode__CDefinition, CNmGraphNode__CDefinition, ISchemaClass<CNmGraphNode__CDefinition>, ISchemaClass<CNmValueNode__CDefinition>, ISchemaClass<CNmIDValueNode__CDefinition>, ISchemaClass<CNmIDEventNode__CDefinition>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### DefaultValue

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmIDEventNode__CDefinition.cs#L21)

```csharp
ref CGlobalSymbol DefaultValue { get; }
```

#### Property Value

- [CGlobalSymbol](/docs/api/shared/natives/cglobalsymbol)

### EventConditionRules

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmIDEventNode__CDefinition.cs#L19)

```csharp
CNmBitFlags EventConditionRules { get; }
```

#### Property Value

- [CNmBitFlags](/docs/api/shared/schemadefinitions/cnmbitflags)

### SourceStateNodeIdx

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmIDEventNode__CDefinition.cs#L17)

```csharp
ref short SourceStateNodeIdx { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

