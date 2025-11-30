---
title: IOnEntityIdentityAcceptInputHookEvent
---

# Interface IOnEntityIdentityAcceptInputHookEvent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnEntityIdentityAcceptInputHookEvent.cs#L10)

**Namespace**: [SwiftlyS2.Shared.Events](/docs/api/events)

**Assembly**: SwiftlyS2.CS2.dll

Called when the entity identity accept input hook is triggered.

```csharp
public interface IOnEntityIdentityAcceptInputHookEvent
```

## Properties

### Activator

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnEntityIdentityAcceptInputHookEvent.cs#L27)

The value of the input being accepted.

```csharp
CEntityInstance? Activator { get; }
```

#### Property Value

- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)?

### Caller

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnEntityIdentityAcceptInputHookEvent.cs#L31)

The caller of the input being accepted.

```csharp
CEntityInstance? Caller { get; }
```

#### Property Value

- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)?

### EntityInstance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnEntityIdentityAcceptInputHookEvent.cs#L19)

The entity instance.

```csharp
CEntityInstance EntityInstance { get; }
```

#### Property Value

- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)

### Identity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnEntityIdentityAcceptInputHookEvent.cs#L15)

The entity identity.

```csharp
CEntityIdentity Identity { get; }
```

#### Property Value

- [CEntityIdentity](/docs/api/schemadefinitions/centityidentity)

### InputName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnEntityIdentityAcceptInputHookEvent.cs#L23)

The name of the input being accepted.

```csharp
string InputName { get; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### OutputId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnEntityIdentityAcceptInputHookEvent.cs#L39)

The output ID of the input being accepted.

```csharp
int OutputId { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Result

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnEntityIdentityAcceptInputHookEvent.cs#L43)

The result of the hook.

```csharp
HookResult Result { get; set; }
```

#### Property Value

- [HookResult](/docs/api/misc/hookresult)

### VariantValue

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnEntityIdentityAcceptInputHookEvent.cs#L35)

The variant value of the input being accepted.

```csharp
CVariant VariantValue { get; }
```

#### Property Value

- [CVariant](/docs/api/natives/cvariant)

