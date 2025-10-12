---
title: C_OP_SetUserEvent
---

```csharp
public interface C_OP_SetUserEvent : CParticleFunctionOperator, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionOperator>, ISchemaClass<C_OP_SetUserEvent>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **FallingEdge** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetUserEvent.cs#L22)

```csharp
CPerParticleFloatInput FallingEdge { get; }
```

- Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### **FallingEventType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetUserEvent.cs#L24)

```csharp
ref EventTypeSelection_t FallingEventType { get; }
```

- Property Value

- [EventTypeSelection_t](/docs/api/shared/schemadefinitions/eventtypeselection_t)

### **Input** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetUserEvent.cs#L16)

```csharp
CPerParticleFloatInput Input { get; }
```

- Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### **RisingEdge** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetUserEvent.cs#L18)

```csharp
CPerParticleFloatInput RisingEdge { get; }
```

- Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### **RisingEventType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_SetUserEvent.cs#L20)

```csharp
ref EventTypeSelection_t RisingEventType { get; }
```

- Property Value

- [EventTypeSelection_t](/docs/api/shared/schemadefinitions/eventtypeselection_t)

