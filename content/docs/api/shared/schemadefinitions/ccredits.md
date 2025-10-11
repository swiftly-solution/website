---
title: CCredits
---

```csharp
public interface CCredits : CPointEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CPointEntity>, ISchemaClass<CCredits>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **LogoLength** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCredits.cs#L20)

```csharp
ref float LogoLength { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **OnCreditsDone** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCredits.cs#L16)

```csharp
CEntityIOOutput OnCreditsDone { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### **RolledOutroCredits** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCredits.cs#L18)

```csharp
ref bool RolledOutroCredits { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

