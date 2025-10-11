---
title: CMovementComponentUpdater
---

```csharp
public interface CMovementComponentUpdater : CAnimComponentUpdater, ISchemaClass<CAnimComponentUpdater>, ISchemaClass<CMovementComponentUpdater>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **DefaultMotorIndex** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMovementComponentUpdater.cs#L21)

```csharp
ref int DefaultMotorIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **DefaultRunSpeed** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMovementComponentUpdater.cs#L23)

```csharp
ref float DefaultRunSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **FacingDamping** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMovementComponentUpdater.cs#L19)

```csharp
CAnimInputDamping FacingDamping { get; }
```

#### Property Value

- [CAnimInputDamping](/docs/api/shared/schemadefinitions/caniminputdamping)

### **Motors** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMovementComponentUpdater.cs#L17)

```csharp
ref CUtlVector Motors { get; }
```

#### Property Value

- [CUtlVector](/docs/api/)

### **MoveVarsDisabled** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMovementComponentUpdater.cs#L25)

```csharp
ref bool MoveVarsDisabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **NetworkFacing** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMovementComponentUpdater.cs#L29)

```csharp
ref bool NetworkFacing { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **NetworkPath** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMovementComponentUpdater.cs#L27)

```csharp
ref bool NetworkPath { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **ParamHandles** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMovementComponentUpdater.cs#L32)

```csharp
SchemaUntypedField ParamHandles { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

